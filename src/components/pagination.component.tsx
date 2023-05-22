import { svnPoppins } from "@/core/font/font";
import { PagingVM } from "@/core/models/paging-model";

interface ComponentProps {
  paging: PagingVM;
  totalItems: number;
  onChangePagePress: (page: number) => void;
}

export const Pagination: React.FunctionComponent<ComponentProps> = (props) => {
  const { page, pageSize } = props.paging;
  
  return (
    <div className="my-6">
      <div className={"relative text-base"}>
        <div className="w-full flex justify-center">
          <nav
            className="isolate inline-flex max-w-6/12"
            aria-label="Pagination"
          >
            <button
              onClick={() => {
                if (page !== 1) {
                  props.onChangePagePress(1);
                }
              }}
              className={`${
                page === 1
                  ? "bg-bg-button text-white rounded-lg"
                  : "text-app-base"
              } px-3.5 py-2 mr-2 hover:bg-bg-button hover:text-white hover:rounded-lg`}
            >
              <span className={`${svnPoppins.poppins_Normal}`}>1</span>
            </button>
            {props.totalItems > 100 && (
              <button
                className={`${
                  page === 2
                    ? "bg-bg-button text-white rounded-lg"
                    : "text-app-base"
                } px-3.5 py-2 mr-2 hover:bg-bg-button hover:text-white hover:rounded-lg`}
                onClick={() => {
                  if (page !== 2) {
                    props.onChangePagePress(2);
                  }
                }}
              >
                2
              </button>
            )}
            {props.totalItems > 200 && (
              <button
                className={`${
                  page === 3
                    ? "bg-bg-button text-white rounded-lg"
                    : "text-app-base"
                } px-3.5 py-2 mr-2 hover:bg-bg-button hover:text-white hover:rounded-lg`}
                onClick={() => {
                  if (page !== 3) {
                    props.onChangePagePress(3);
                  }
                }}
              >
                3
              </button>
            )}
          </nav>
        </div>

        <div className="absolute top-1/4">
          <p
            className={`text-base text-color-main ${svnPoppins.poppins_Normal}`}
          >
            Showing{" "}
            <span className="font-medium">{(page - 1) * pageSize + 1}</span> -{" "}
            <span className="font-medium">{page * pageSize}</span> out of{" "}
            <span className="font-medium">{props.totalItems}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
