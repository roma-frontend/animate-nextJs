export const useHash = (setActiveItem: (hash: string) => void) => {
  const handleScroll = () => {
    const currentHash = window.location.hash;
    setActiveItem(currentHash);
  };

  const handleHashChange = () => {
    handleScroll();
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("hashchange", handleHashChange);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("hashchange", handleHashChange);
  };
};
