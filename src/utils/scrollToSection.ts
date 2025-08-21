export function scrollToSection(event: React.SyntheticEvent) {
  event.preventDefault();
  const target = event.target as HTMLAnchorElement;
  const id = target.getAttribute('href')?.replace('#', '');
  const section = document.getElementById(String(id));

  // Alternative implementation (not working properly on some sections)
  // section?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (section) {
    const headerHeight = document.querySelector('header')?.clientHeight || 0;
    const sectionPosition = section.offsetTop - headerHeight * 2;
    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
  }
}
