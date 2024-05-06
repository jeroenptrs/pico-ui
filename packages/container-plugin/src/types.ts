export type ContainerScreen = {
  maxWidth?: string | number;
  padding?: string | number;
};

type ContainerScreens = Partial<{ DEFAULT: ContainerScreen }> & { [x: string]: ContainerScreen };

export type ContainerTheme = {
  center?: boolean;
  screens?: ContainerScreens;
};
