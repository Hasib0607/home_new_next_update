"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { ANALYTICS_PREV_PERSIST, TRIGGER_E_TRACK } from "@/consts";
import useBrowserInfo from "@/hooks/useBrowserInfo";
import useGeoLocation from "@/hooks/useGeoLocation";
import { usePathname } from "next/navigation";
import { getFromLocalStorage, saveToLocalStorage } from "@/helper/localStorage";
import { formattedDateTime } from "@/helper/getTime";
import { removeFbclid } from "@/helper/urlCleaner";
import { getUserDataFromCookies } from "@/app/[locale]/actions";
import { AnalyticsContext } from "@/context/AnalyticsContext";

const EbitansAnalytics = ({locale}) => {
  
  const { address, fetchAddress } = useGeoLocation();
  const { browser } = useBrowserInfo();
  const pathname = usePathname();
  const previousPath = useRef(null);

  const { clickEvents } = useContext(AnalyticsContext);

  const visitTime = formattedDateTime();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const updateVisitorData = async (visitorData) => {
    try {
      const response = await fetch(`/api/${locale}/track-visitor`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(visitorData),
      });
      const data = await response.json(); // Parse JSON response
      return data; // Return data for further processing if needed
    } catch (error) {
      console.error("Error sending visitor data:", error);
      return null; // Return null or handle the error gracefully
    }
  };

  if (previousPath.current !== pathname) {
    const exitTime = formattedDateTime();

    const previousAnalyticsData =
      getFromLocalStorage(ANALYTICS_PREV_PERSIST) ?? {};

    const updatedAnalyticsData = {
      id: previousAnalyticsData?.id,
      exit_time: exitTime,
    };

    previousPath.current = pathname;

    // if (Object.keys(previousAnalyticsData).length !== 0) {
    //     return;
    // }
    updateVisitorData(updatedAnalyticsData);
  }

  // for store
  const [userData, setUserData] = useState({});

  // for device
  const [device, setDevice] = useState(null);
  const [os, setOs] = useState(null);

  //   for ip
  const [mac, setMac] = useState(null);
  const [state, setState] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [city, setCity] = useState(null);
  const [zipCode, setZipCode] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserDataFromCookies();
      setUserData(data);
    };
    fetchUserData();
  }, [pathname]);

  // analytics info
  useEffect(() => {
    const sendVisitorData = async (visitorData) => {
      try {
        const response = await fetch(`/api/${locale}/track-visitor`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(visitorData),
        });
        const data = await response.json(); // Parse JSON response
        // console.log('Server Response:', data);
        return data; // Return data for further processing if needed
      } catch (error) {
        console.error("Error sending visitor data:", error);
        return null; // Return null or handle the error gracefully
      }
    };

    const cleanedCurrentUrl = removeFbclid(
      userData?.currentUrl,
      userData?.domain
    );
    const cleanedPreviousUrl = removeFbclid(
      userData?.previousUrl,
      userData?.domain
    );

    const analyticsData = {
      store_url: userData?.domain,
      page_url: cleanedCurrentUrl,
      page_title: document.title,
      refer_page_url: cleanedPreviousUrl,
      ip: userData?.userIp,
      device,
      mac,
      os,
      browser,
      country_code: countryCode,
      country_name: countryName,
      state,
      city,
      zip_code: zipCode,
      location: address,
      latitude,
      longitude,
      category_id: userData?.cat_id,
      product_id: userData?.productId,
      visit_time: visitTime,
      time_zone: timeZone,
      ...clickEvents,
    };

    const sendCommand = getFromLocalStorage(TRIGGER_E_TRACK);

    if (sendCommand) {
      sendVisitorData(analyticsData).then((response) => {
        const resData = response?.data?.data || {};
        saveToLocalStorage(ANALYTICS_PREV_PERSIST, resData);
      });
    }
  }, [
    userData,
    device,
    mac,
    os,
    browser,
    countryCode,
    countryName,
    state,
    city,
    zipCode,
    address,
    latitude,
    longitude,
    visitTime,
    timeZone,
    clickEvents,
  ]);

  return null;
};

export default EbitansAnalytics;
