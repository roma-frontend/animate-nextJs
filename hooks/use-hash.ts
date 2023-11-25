export const useHash = (setActiveItem: (hash: string) => void) => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("section");

    let currentSectionIndex = -1;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSectionIndex = i;
        break;
      }
    }

    if (currentSectionIndex !== -1) {
      const currentSection = sections[currentSectionIndex];
      const currentHash = `#${currentSection.id}`;
      setActiveItem(currentHash);

      if (window.location.hash !== currentHash) {
        history.replaceState({}, "", currentHash);
      }
    }
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
