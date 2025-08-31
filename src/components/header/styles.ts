import { tv } from 'tailwind-variants';

const header = tv({
  base: 'fixed top-0 z-20 flex h-[85px] w-full flex-row items-center justify-between rounded-xl px-8 py-6 transition-all duration-300 lg:px-36',
  variants: {
    isFloating: {
      true: 'bg-[#E0E8F690] shadow-lg dark:bg-[#1C1C1C90]',
    },
  },
});

const logo = tv({
  base: 'light:text-black font-poppins text-2xl font-bold dark:text-white',
  variants: {
    isFloating: {
      true: 'cursor-pointer',
      false: 'cursor-default',
    },
  },
});

const navbarLinksWrapper = 'hidden flex-row items-center lg:flex';

const navbarLinks =
  'flex flex-row items-center gap-9 font-poppins dark:text-lightGray';

const sidebarLinksWrapper =
  'border-y border-y-gray-400 p-6 dark:border-y-darkGray';

const sidebarLinks = 'space-y-4 text-start text-gray-800 dark:text-white';

const sidebarOverlay = 'fixed inset-0 z-40 bg-black opacity-30';

const sidebarContent =
  'fixed bottom-0 right-0 top-0 z-50 flex w-80 flex-col bg-ice dark:bg-plumber lg:w-96';

const sidebarHeader = 'flex flex-row items-center justify-between p-6';

const sidebarTitle =
  'font-poppins text-2xl font-bold dark:text-white cursor-pointer';

export {
  header,
  logo,
  navbarLinks,
  navbarLinksWrapper,
  sidebarContent,
  sidebarHeader,
  sidebarLinks,
  sidebarLinksWrapper,
  sidebarOverlay,
  sidebarTitle,
};
