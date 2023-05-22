/* eslint-disable @next/next/no-img-element */
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { listDropdownVM } from "@/core/models/global.model";
import { svnPoppins } from "@/core/font/font";

interface ComponentProps {
  data: listDropdownVM[];
  defaultData: listDropdownVM;
  onChangeData?: (id: string) => void;
  className?: string;
}

export const DropdownComponent: React.FunctionComponent<ComponentProps> = (
  props
) => {
  const [dataSelected, setDataSelected] = useState<listDropdownVM>({
    id: "",
    name: "",
  });

  useEffect(() => {
    if (props.defaultData) {
      setDataSelected(props.defaultData);
    }
  }, [props.defaultData]);

  return (
    <Listbox
      value={dataSelected}
      onChange={(val) => {
        console.log(val);

        if (props.onChangeData) {
          props.onChangeData(val?.id);
        }
        setDataSelected(val);
      }}
    >
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className={`relative ${props.className ? props.className : 'w-full'} test-base cursor-default rounded-md bg-select-box py-1.5 pl-3 text-left text-app-base focus:outline-none text-base sm:leading-6`}>
              <span className="flex justify-between">
                <span className="flex">
                  <img
                    src="/assets/icon/blockchain-icon.png"
                    alt=""
                    className="w-[16px] h-[16px] mt-[3px]"
                  />
                  <span className="ml-1 block truncate">
                    {dataSelected?.name}
                  </span>
                </span>
                <img
                  src="/assets/icon/arrow-icon.png"
                  alt=""
                  className="w-[16px] h-[16px] mt-[3px] mx-1"
                />
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"></span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {props.data?.map((person: any) => (
                  <Listbox.Option
                    key={person.id}
                    className={`${
                      dataSelected?.id === person.id
                        ? "bg-select-box text-app-base"
                        : "text-app-base"
                    } relative cursor-default select-none py-2 pl-3 pr-9`}
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={`${
                              dataSelected?.id === person.id
                                ? `${svnPoppins.poppins_Bold.className}`
                                : `${svnPoppins.poppins_Normal.className}`
                            } ml-3 block truncate`}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={`${
                              dataSelected?.id === person.id
                                ? "text-white"
                                : "text-app-base"
                            } absolute inset-y-0 right-0 flex items-center pr-4`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
