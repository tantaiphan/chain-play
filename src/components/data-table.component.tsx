/* eslint-disable @next/next/no-img-element */
import { svnPoppins } from "@/core/font/font";
import { PlatformEnum } from "@/core/libs/constant";
import {
  BlockchainVM,
  GameVM,
  GenreVM,
  PlatformVM,
} from "@/core/models/blockchains.model";

interface ComponentProps {
  data: GameVM[];
  onEditItemPress: (item: GameVM) => void;
}

export const DataTable: React.FunctionComponent<ComponentProps> = (props) => {
  // function render header table
  const onRenderTableheader = () => {
    return (
      <>
        <thead className="text-xs text-app-base uppercase border-b border-app-border-color-01">
          <tr className={`${svnPoppins.poppins_Medium.className} text-sm`}>
            <th scope="col" className="px-6 py-3 w-5">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Genre
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              platform
            </th>

            <th scope="col" className="px-6 py-3 text-right"></th>
          </tr>
        </thead>
      </>
    );
  };

  const onRenderTableBody = () => {
    return (
      <tbody>
        {props.data?.map((item, index) => {
          return (
            <tr key={index} className="border-b border-table-line">
              <td className="w-4 p-4">
                <p className="text-center">{index + 1}</p>
              </td>
              <td className="px-6 py-4">{onRenderNameData(item)}</td>
              <td className="px-6 py-4">{onRenderGenreData(item.Genres)}</td>
              <td className="px-6 py-4">
                {onRenderPlatFormData(item.Platforms)}
              </td>
              <td>
                <button
                  className={
                    "rounded-lg border border-table-line text-app-base px-3.5 py-2 hover:bg-bg-button hover:text-white hover:rounded-lg"
                  }
                  onClick={() => {
                    props.onEditItemPress(item);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  const onRenderNameData = (detail: GameVM) => {
    return (
      <div className="flex">
        <img
          src={detail.ImageUrl}
          className={"w-[40px] h-[40px] rounded-[100px] mr-4"}
          alt=""
        />
        <div>
          <p className={`${svnPoppins.poppins_Medium.className}`}>
            {detail.Name}{" "}
            <span
              className={`${svnPoppins.poppins_Normal.className} text-color-main uppercase`}
            >
              {detail.Symbol}
            </span>
          </p>
          {onRenderBlockchainData(detail.BlockChains?.[0])}
        </div>
      </div>
    );
  };

  const onRenderBlockchainData = (data: BlockchainVM) => {
    return (
      <div className={"flex"}>
        <img
          src={data?.ExtendValue || ""}
          className={"w-[20px] h-[20px] rounded-[100px] mr-2"}
          alt=""
        />
        <p>{data?.Name}</p>
      </div>
    );
  };

  const onRenderGenreData = (genres: GenreVM[]) => {
    return (
      <p>
        {genres?.map((item, index) => {
          return `${item.Name} ${index < genres.length - 1 ? " | " : ""}`;
        })}
      </p>
    );
  };

  const onRenderPlatFormData = (platform: PlatformVM[]) => {
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

    return (
      <div className="flex justify-end">
        {platform?.map((item, index) => {
          return (
            <img
              key={index}
              src={onrenderIconPlatform(item.Code)}
              alt=""
              className="w-[24px] h-[24px] ml-2.5"
            />
          );
        })}
      </div>
    );
  };

  return (
    <table
      className={`w-full text-base text-left text-app-base ${svnPoppins.poppins_Normal.className}`}
    >
      {onRenderTableheader()}
      {onRenderTableBody()}
    </table>
  );
};
