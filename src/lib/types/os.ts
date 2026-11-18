import type { Component } from "svelte";
import type { APP_REGISTRY } from '#lib/config/apps.ts' 
export interface AppConfig {
    title: string;
    icon: Component;
    component: Component;
    defaultSize: {width:number, height:number};
    defaultPosition: {x:number, y:number};
    showInDock: boolean;
    openOnBoot?: boolean;
}

export type AppId = keyof typeof APP_REGISTRY;

export interface WindowState {
    id: AppId;
    title: string;
    isOpen: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    zIndex: number;
    position: {x: number, y: number};
    size: {height: number, width: number};
}