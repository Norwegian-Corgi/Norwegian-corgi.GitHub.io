export default class DOMUtils {
  static smoothScroll(to: string): void {
    const element = document.getElementById(to) as HTMLElement;
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }
}
