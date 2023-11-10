import { Popover } from "@headlessui/react";

export default function Alert({ children, message }) {
    return (
        <Popover className="relative inline-flex items-center">
            <Popover.Button className={"outline-none"}>
                {children}
            </Popover.Button>

            <Popover.Panel className="absolute z-10">
                <div className="bg-[var(--secondary-color)] text-[var(--white-or-black)] p-3 w-48 absolute right-0 top-2 rounded-md border border-[var(--gray)] text-xs">
                    {message}
                </div>

                <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
        </Popover>
    );
}
