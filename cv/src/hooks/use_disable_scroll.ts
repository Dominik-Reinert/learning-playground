export const useDisableScroll = () => {
  const disableScroll = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  };
  const enableScroll = () => {
    window.onscroll = function () {};
  };
  return [disableScroll, enableScroll];
};
