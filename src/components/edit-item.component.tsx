/* eslint-disable @next/next/no-img-element */
import { svnPoppins } from "@/core/font/font";
import {
  BlockchainVM,
  GameVM,
  GenreVM,
  PlatformVM,
} from "@/core/models/blockchains.model";
import { PagingVM } from "@/core/models/paging-model";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment, useRef, useEffect } from "react";
import { DropdownComponent } from "./dropdown.conponent";
import { setTimeout } from "timers";
import { ListSelectComponent } from "./list-select.conponent";
import { PlatformEnum } from "@/core/libs/constant";
import { ChooseSelectComponent } from "./choose-select.conponent";

interface ComponentProps {
  show: boolean;
  onClose: () => void;
  game: GameVM;
  blockChain: BlockchainVM[];
  genres: GenreVM[];
  platforms: PlatformVM[];
  onSubmit: (game: GameVM) => void;
}

export const EditItemModal: React.FunctionComponent<ComponentProps> = (
  props
) => {
  const cancelButtonRef = useRef(null);

  const { game } = props;

  const [dataChange, setDataChange] = useState<GameVM>(new GameVM());

  useEffect(() => {
    setDataChange(game);
  }, [game]);

  const onChangeSymbol = (value: string | undefined) => {
    setDataChange((prev) => {
      return { ...prev, Symbol: value || "" };
    });
  };

  const onChangeBlockchain = (id: string) => {
    const val = props.blockChain.find((value) => {
      return value.Code === id;
    });

    if (val) {
      setDataChange({
        ...dataChange,
        BlockChains: [val],
      });
    }
  };

  const onClose = async (val: boolean) => {
    await props.onClose();
    setDataChange(new GameVM());
  };

  const onrenderIconPlatform = (code: string) => {
    switch (code) {
      case PlatformEnum.Android: {
        return "/assets/icon/android-icon.png";
      }
      case PlatformEnum.iOS: {
        return "/assets/icon/ios-icon.png";
      }
      case PlatformEnum.PC: {
        return "/assets/icon/monitor.png";
      }
      case PlatformEnum.Mac: {
        return "/assets/icon/monitor.png";
      }
      case PlatformEnum.Mobile: {
        return "/assets/icon/mobile-icon.png";
      }
      case PlatformEnum.Browser: {
        return "/assets/icon/mobile-icon.png";
      }
      case PlatformEnum.Windows: {
        return "/assets/icon/mobile-icon.png";
      }
      default: {
        return "";
      }
    }
  };

  const onChooseGerneItem = (id: string) => {
    const val = props.genres.find((value) => {
      return value.Code === id;
    });

    if (val) {
      const index = dataChange.Genres.findIndex(
        (value) => value.Code === val.Code
      );

      if (index === -1) {
        setDataChange({
          ...dataChange,
          Genres: [...dataChange.Genres, val],
        });
      }
    }
  };

  const onChoosePlatformItem = (id: string) => {
    const val = props.platforms.find((value) => {
      return value.Code === id;
    });

    console.log("aaaaaa");

    if (val) {
      const index = dataChange.Platforms.findIndex(
        (value) => value.Code === val.Code
      );

      console.log(index);

      if (index === -1) {
        setDataChange({
          ...dataChange,
          Platforms: [...dataChange.Platforms, val],
        });
      }
    }
  };

  const onRenderTableheader = () => {
    return (
      <>
        <thead className="text-xs text-app-base uppercase border-b border-app-border-color-01">
          <tr className={`${svnPoppins.poppins_Medium.className} text-sm`}>
            <th scope="col" className="px-6 py-3">
              Avatar
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Symbol
            </th>
            <th scope="col" className="px-6 py-3">
              Blockchain
            </th>
            <th scope="col" className="px-6 py-3">
              Genres
            </th>
            <th scope="col" className="px-6 py-3">
              Platform
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-table-line">
            <td className="w-4 p-4">
              <img src={game.ImageUrl} className="rounded-[100px]" alt="" />
            </td>
            <td className="px-6 py-4">
              <p
                className={`${svnPoppins.poppins_Normal.className} text-app-base text-base`}
              >
                {game.Name}
              </p>
            </td>
            <td className="px-6 py-4">
              <div>
                <div className=" rounded-lg relative bg-select-box border-0 w-[150px]">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-[150px] bg-select-box rounded-lg border-0 py-1.5 px-4 text-app-base placeholder:text-app-base focus:ring-1 text-base leading-6"
                    value={dataChange.Symbol}
                    onChange={(event) => {
                      onChangeSymbol(event.target?.value || "");
                    }}
                  />
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <div>
                <ListSelectComponent
                  data={props.blockChain.map((item) => {
                    return {
                      id: item.Code,
                      name: item.Name,
                      icon: item.ExtendValue || "",
                    };
                  })}
                  onChangeData={onChangeBlockchain}
                  defaultData={{
                    id: dataChange.BlockChains[0]?.Code,
                    name: dataChange.BlockChains[0]?.Name,
                    icon: dataChange.BlockChains[0]?.ExtendValue || "",
                  }}
                  className={"w-[200px]"}
                />
              </div>
            </td>
            <td className="px-6 py-4">
              <div className=" max-h-[200px] overflow-auto">
                <div className="grid grid-flow-row auto-cols-max">
                  {dataChange.Genres?.map((item, index) => {
                    return (
                      <span
                        key={item.Code}
                        className={`flex justify-between border border-app-border-color-01 px-2 py-1 rounded-lg ${
                          index === 0 ? "" : "mt-2"
                        }`}
                      >
                        <p>{item.Name}</p>
                        <button
                          className={`${svnPoppins.poppins_Bold.className} ml-2`}
                          onClick={() => {
                            setDataChange((prev) => {
                              return {
                                ...prev,
                                Genres: dataChange.Genres.filter(
                                  (val) => val.Code !== item.Code
                                ),
                              };
                            });
                          }}
                        >
                          x
                        </button>
                      </span>
                    );
                  })}
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className=" max-h-[200px] overflow-auto">
                <div className="grid grid-flow-row auto-cols-max">
                  {dataChange.Platforms?.map((item, index) => {
                    return (
                      <span
                        key={item.Code}
                        className={`flex justify-between border border-app-border-color-01 px-2 py-1 rounded-lg ${
                          index === 0 ? "" : "mt-2"
                        }`}
                      >
                        <span className="flex">
                          {" "}
                          <img
                            src={onrenderIconPlatform(item.Code)}
                            alt=""
                            className="w-[16px] h-[16px] mt-[3px] mr-2"
                          />
                          {item.Name}
                        </span>
                        <button
                          className={`${svnPoppins.poppins_Bold.className} ml-2`}
                          onClick={() => {
                            setDataChange((prev) => {
                              return {
                                ...prev,
                                Platforms: dataChange.Platforms.filter(
                                  (val) => val.Code !== item.Code
                                ),
                              };
                            });
                          }}
                        >
                          x
                        </button>
                      </span>
                    );
                  })}
                </div>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="w-4 p-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">
              <div>
                <ChooseSelectComponent
                  data={props.genres.map((item) => {
                    return {
                      id: item.Code,
                      name: item.Name,
                      icon: onrenderIconPlatform(item.Code),
                    };
                  })}
                  onChangeData={onChooseGerneItem}
                  defaultData={{
                    id: dataChange.Platforms[0]?.Code,
                    name: dataChange.Platforms[0]?.Name,
                    icon: onrenderIconPlatform(dataChange.Platforms[0]?.Code),
                  }}
                  className={"w-[200px]"}
                />
              </div>
            </td>
            <td className="px-6 py-4">
              <div>
                <ChooseSelectComponent
                  data={props.platforms.map((item) => {
                    return {
                      id: item.Code,
                      name: item.Name,
                      icon: onrenderIconPlatform(item.Code),
                    };
                  })}
                  onChangeData={onChoosePlatformItem}
                  defaultData={{
                    id: dataChange.Platforms[0]?.Code,
                    name: dataChange.Platforms[0]?.Name,
                    icon: onrenderIconPlatform(dataChange.Platforms[0]?.Code),
                  }}
                  className={"w-[200px]"}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </>
    );
  };
  return (
    <Transition.Root show={props.show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-[1366px] min-h-[500px] flex flex-col justify-between">
                <div className="bg-white px-10 pb-4 pt-5 text-app-base">
                  <h1
                    className={`${svnPoppins.poppins_Medium.className} text-3xl text-app-base text-center`}
                  >
                    Edit game
                  </h1>
                  <table
                    className={`w-full text-base text-left text-app-base ${svnPoppins.poppins_Normal.className}`}
                  >
                    {onRenderTableheader()}
                  </table>
                </div>
                <div className="px-10 py-3 flex flex-row-reverse pb-10">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-[100px] justify-center rounded-md bg-bg-button px-3 py-2 text-base text-white shadow-sm ml-3 w-auto"
                    onClick={() => {
                      props.onSubmit(dataChange);
                      onClose(false);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-[100px] justify-center rounded-md bg-white px-3 py-2 text-base text-app-base shadow-sm ring-1 ring-inset ring-gray-300 mt-0 w-auto"
                    onClick={() => onClose(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
