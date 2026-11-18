import type { Component } from "svelte";

export interface AppConfig {
    title: string;
    icon: Component;
    component: Component;
    defaultSize: {width:number, height:number};
    defaultPosition: {x:number, y:number};
    showInDock: boolean;
    openOnBoot?: boolean;
}

