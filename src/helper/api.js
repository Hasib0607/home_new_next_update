import { baseUrl } from "@/constants/baseUrl";

// pricing api 
export const fetchPricingData = async () => {
    try {
        const response = await fetch(`${baseUrl}/plan-details`, { next: { revalidate: 10 } });
        const data = await response.json();
        return data
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};

// Themes api 
export const fetchThemeData = async () => {
    try {
        const response = await fetch(`${baseUrl}/templates`, { next: { revalidate: 10 } });
        const data = await response.json();
        return data?.templates
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};

// Blog api start 
export const fetchBlogSitemapData = async () => {
    try {
        const response = await fetch(`${baseUrl}/blog/site-map`, { next: { revalidate: 10 } });
        const data = await response.json();
        return data?.results
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};


export const fetchBlogData = async () => {
    try {
        const response = await fetch(`${baseUrl}/blog`, { next: { revalidate: 10 } });
        const data = await response.json();
        return data?.results?.data
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};


export const fetchBlogPopularData = async () => {
    try {
        const response = await fetch(`${baseUrl}/blog/popular`, { next: { revalidate: 10 } });
        const data = await response.json();
        return data?.results?.data
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};


export const fetchBlogTypeData = async () => {
    try {
        const response = await fetch(`${baseUrl}/blog/types`, { next: { revalidate: 10 } });
        const data = await response.json();
        return data?.blogTypes
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};


export const fetchTypeWiseBlogData = async (blogTypeId, typePage) => {
    try {
        const response = await fetch(`${baseUrl}/blog/types/${blogTypeId}${typePage}`, { next: { revalidate: 10 } });
        const data = await response.json();
        return data
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};


export const fetchBlogDetailsData = async (params) => {
    try {
        const response = await fetch(`${baseUrl}/blog/details/${params?.slug}`, { next: { revalidate: 10 } });
        const data = await response.json();
        return data
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};

// Blog api end 

// Product khujo api start

export const fetchPseCategory = async () => {
    try {
        const response = await fetch(`${baseUrl}/pse/products/categories`, { next: { revalidate: 10 } });
        const data = await response.json();
        return data?.results
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};


export const fetchPseSearch = async (searchTxt, allProductSlug) => {
    try {
        const response = await fetch(`${baseUrl}/pse/products/product-by-category?name=${searchTxt}&slug=${allProductSlug?.slug}`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};


export const fetchIp = async () => {
    try {
        const response = await fetch(`https://api.bigdatacloud.net/data/client-ip`);
        const data = await response.json();
        return data.ipString
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};


export const visitorData = async (item, ip) => {
    if (item) {
        const data = {
            store_id: item?.store_id,
            pse_id: item?.id,
            product_id: item?.product_id,
            ip: ip,
            domain: item?.store_url,
        }
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await fetch(`${baseUrl}/pse/products/visitor`, requestOptions)
            return response;
        } catch (error) {
            console.error(error);
            throw error; // rethrow the error to the caller
        }
    }
    return null;
}

// Product khujo api end

