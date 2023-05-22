import { dataList } from "@/core/data/data";
import { isEmpty, searchASCII } from "@/core/libs/ultils";
import {
  BlockchainVM,
  GenreVM,
  GetGamesApiResult,
  PlatformVM,
} from "@/core/models/blockchains.model";
import { PagingVM } from "@/core/models/paging-model";

export const getGames = (paging: PagingVM) => {
  return new Promise<GetGamesApiResult>((resolve, reject) => {
    const { page, pageSize, keyWord, keyFillter } = paging;
    const totalItems = dataList.length;
    const positionSlice = (page - 1) * pageSize;

    if (positionSlice < totalItems) {
      const items = dataList.filter((item, index) => {
        return index >= positionSlice && index < positionSlice + pageSize;
      });

      // return items search
      let temp: any = [];
      if (!isEmpty(keyWord) && keyFillter === "all") {
        temp = items.filter((item) => {
          return searchASCII(keyWord, item.Name || item.Symbol || "");
        });
      }
      if (isEmpty(keyWord) && (!isEmpty(keyFillter) || keyFillter !== "all")) {
        temp = items.filter((item) => {
          return item.BlockChains?.[0].Code === keyFillter;
        });
      }
      if (keyFillter !== "all") {
        temp = items.filter((item) => {
          return (
            searchASCII(keyWord, item.Name || item.Symbol || "") &&
            item.BlockChains?.[0].Code === keyFillter
          );
        });
      } else {
        temp = items;
        
      resolve({
        items: items,
        totalItems: totalItems,
      });
      }
      

      resolve({
        items: temp,
        totalItems: temp.length,
      });
    } else {
      reject("Error get list data");
    }
  });
};

export const getBlockchains = () => {
  return new Promise<BlockchainVM[]>((resolve, reject) => {
    let blockchains: BlockchainVM[] = [];
    dataList.forEach((item) => {
      item.BlockChains.forEach((data) => {
        const index = blockchains.findIndex((val) => val.Code === data.Code);
        if (index === -1) {
          blockchains.push(data);
        }
      });
    });

    if (blockchains.length > 0) {
      resolve(blockchains);
    } else {
      reject("Error get list blockchains");
    }
  });
};

export const getGenres = () => {
  return new Promise<GenreVM[]>((resolve, reject) => {
    let genres: GenreVM[] = [];
    dataList.forEach((item) => {
      item.Genres.forEach((data) => {
        const index = genres.findIndex((val) => val.Code === data.Code);
        if (index === -1) {
          genres.push(data);
        }
      });
    });

    if (genres.length > 0) {
      resolve(genres);
    } else {
      reject("Error get list genres");
    }
  });
};

export const getPlatforms = () => {
  return new Promise<PlatformVM[]>((resolve, reject) => {
    let platforms: PlatformVM[] = [];
    dataList.forEach((item) => {
      item.Platforms.forEach((data) => {
        const index = platforms.findIndex((val) => val.Code === data.Code);
        if (index === -1) {
          platforms.push(data);
        }
      });
    });

    if (platforms.length > 0) {
      resolve(platforms);
    } else {
      reject("Error get list genres");
    }
  });
};
