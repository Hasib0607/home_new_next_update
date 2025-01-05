import Image from "next/image";

export const insertImagesSide = (data, portrait) => {
    const gridItems = [];
    const usedBannerIndexes = [];
    data?.forEach((product, index) => {
      // Check if the current index is a multiple of 10 (excluding 0) and not the last product
      if ((index + 1) % 10 === 0 && index !== 0 && portrait?.length > 0) {
        const imageIndex = Math.floor(index / 10) % portrait?.length;
        if (imageIndex !== undefined && !usedBannerIndexes.includes(imageIndex)) {
          gridItems.push(
            <div key={`image${index}`} className="pb-5">
              <a href={portrait[imageIndex]?.link} target="_blank" rel="noopener noreferrer"><Image src={portrait[imageIndex]?.banner} width={500} height={500} alt={`images`} className='min-w-full h-auto ' /></a>
            </div>
          );
          usedBannerIndexes.push(imageIndex); // Mark the banner index as used
        }
      }

    });

    if (data?.length < 10 && portrait[0]?.banner) {
      gridItems.push(
        <div key={`imageFallback`} className="pb-5">
          <a href={portrait[0]?.link} target="_blank" rel="noopener noreferrer"><Image src={portrait[0]?.banner} width={500} height={500} alt={``} className='min-w-full h-auto' /></a>
        </div>
      );
    }

    return gridItems;
  };
