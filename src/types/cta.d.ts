interface Action {
  href: string;
  text?: string;
}

interface CallToAction {
  primary: Action;
  secondary?: Action;
}
