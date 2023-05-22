/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import {
  getBlockchains,
  getGames,
  getGenres,
  getPlatforms,
} from "./page.utils";
import { PagingVM } from "@/core/models/paging-model";
import {
  BlockchainVM,
  GameVM,
  GenreVM,
  PlatformVM,
} from "@/core/models/blockchains.model";
import { svnPoppins } from "@/core/font/font";
import { DropdownComponent } from "@/components/dropdown.conponent";
import { DataTable } from "@/components/data-table.component";
import { Pagination } from "@/components/pagination.component";
import { dataList } from "@/core/data/data";
import { EditItemModal } from "@/components/edit-item.component";
import { setTimeout } from "timers";
import { listDropdownVM } from "@/core/models/global.model";

interface ComponentProps {
  ex?: string;
}

export const HomeComponent: React.FunctionComponent<ComponentProps> = (
  props
) => {
  const [data, setData] = useState<GameVM[]>([]);
  const [blockChains, setBlockChains] = useState<BlockchainVM[]>([]);
  const [genres, setGenres] = useState<GenreVM[]>([]);
  const [platfForms, setPlatfForms] = useState<PlatformVM[]>([]);
  const [totalitems, setTotalitems] = useState<number>(0);
  const [paging, setPaging] = useState<PagingVM>(new PagingVM());
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<GameVM>(new GameVM());
  const [keyWord, setKeyWord] = useState<string | undefined>("");
  const [dataFilter, setDataFilter] = useState<listDropdownVM>(
    new listDropdownVM()
  );

  // call get list data when to focus page
  useEffect(() => {
    onGetGameList(1, keyWord, dataFilter.id);
    onGetBlockchain();
    onGetBlatforms();
    onGetGenres();
    setDataFilter({ id: "all", name: "All Blockchain" });
  }, []);

  // get list game
  const onGetGameList = async (
    page: number,
    keyWord?: string,
    keyFilter?: string
  ) => {
    const res = await getGames({
      ...paging,
      page,
      keyWord: keyWord || "",
      keyFillter: keyFilter || "",
    });
    if (res) {
      onGetDataGameSuccess(res.items, res.totalItems);
    }
  };

  // get list blockchains
  const onGetBlockchain = async () => {
    const res = await getBlockchains();
    if (res) {
      setBlockChains(res);
    }
  };
  // get list genre
  const onGetGenres = async () => {
    const res = await getGenres();
    if (res) {
      setGenres(res);
    }
  };

  // get list blockchains
  const onGetBlatforms = async () => {
    const res = await getPlatforms();
    if (res) {
      setPlatfForms(res);
    }
  };

  // set data when call api success
  const onGetDataGameSuccess = (data: GameVM[], totalItems: number) => {
    setData(data);
    console.log(totalItems);

    setTotalitems(totalItems);
  };

  // on change page number press
  const onPageChangePress = (pageNumber: number) => {
    onGetGameList(pageNumber, keyWord, dataFilter.id);
    setPaging((prev) => {
      return { ...prev, page: pageNumber };
    });
  };

  // view edit detail
  const onEditItemPress = (val: GameVM) => {
    setDataEdit(val);
    setShowEdit(true);
  };

  // submit edit item
  const onSubmit = (val: GameVM) => {
    const dataTemp: any = data.map((item) => {
      if (val.Code === item.Code) {
        return val;
      }
      return item;
    });
    setData(dataTemp);
  };

  // search with filter
  const onFilterPress = (id: string) => {
    const val = blockChains.find((value) => {
      return value.Code === id;
    });

    if (val) {
      setDataFilter({ id: val?.Code, name: val?.Name });
    } else {
      setDataFilter({ id: "all", name: "All Blockchain" });
    }

    setPaging((prev) => {
      return {
        ...prev,
        page: 1,
      };
    });

    onGetGameList(1, keyWord, id);
  };

  // set with keyword
  const onSearchChange = (key: string) => {
    setKeyWord(key);

    setPaging((prev) => {
      return {
        ...prev,
        page: 1,
      };
    });

    onGetGameList(1, key, dataFilter.id);
  };

  return (
    <div className="mt-8 mb-[100px]">
      <p className="flex items-center text-sm text-app-base">
        <span>Home</span>{" "}
        <span>
          <img
            className="w-[16px] h-[16px] mx-2"
            src="/assets/icon/arrow-right-icon.png"
            alt=""
          />
        </span>{" "}
        Games
        <span>
          <img
            className="w-[16px] h-[16px] mx-2"
            src="/assets/icon/arrow-right-icon.png"
            alt=""
          />
        </span>{" "}
        Best Free P2E NFT Games in 2022{" "}
      </p>
      <h1 className={`text-3xl mt-4 ${svnPoppins.poppins_Medium.className}`}>
        Best Free P2E NFT Games in 2022
      </h1>
      <p className={`text-base ${svnPoppins.poppins_Normal.className}`}>
        Are you looking for Games that Free-to-play? Here are the best F2P NFT
        games available.
      </p>
      <div className="flex my-6 justify-between">
        <DropdownComponent
          data={[
            { id: "all", name: "All Blockchain" },
            ...blockChains.map((item, index) => {
              return {
                id: item.Code,
                name: item.Name,
              };
            }),
          ]}
          defaultData={dataFilter}
          className="w-[200px]"
          onChangeData={(id) => onFilterPress(id)}
        />
        <div>
          <div className=" rounded-[100px] shadow-sm relative bg-select-box">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <img
                src="/assets/icon/search-icon.png"
                alt=""
                className="w-[24px] h-[24px]"
              />
            </div>
            <input
              type="text"
              className="block w-full bg-select-box rounded-[100px] border-0 py-1.5 pl-10 pr-10 text-app-base ring-1 ring-inset ring-gray-300 placeholder:text-color-main focus:ring-1 text-base sm:leading-6"
              placeholder="Search"
              value={keyWord}
              onChange={(val) => onSearchChange(val.target.value)}
            />
          </div>
        </div>
      </div>
      {dataList.length > 0 && (
        <>
          <DataTable data={data} onEditItemPress={onEditItemPress} />
          <Pagination
            paging={paging}
            totalItems={totalitems}
            onChangePagePress={onPageChangePress}
          />
        </>
      )}
      <EditItemModal
        show={showEdit}
        onClose={() => {
          setShowEdit(false);
          setDataEdit(new GameVM());
        }}
        game={dataEdit}
        blockChain={blockChains}
        genres={genres}
        platforms={platfForms}
        onSubmit={onSubmit}
      />
    </div>
  );
};
