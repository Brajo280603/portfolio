import { Terminal,FolderGit2,FileText,Mail,User, Folder } from "@lucide/svelte";
import type { AppConfig } from "#lib/types/os.ts";

import TerminalApp from "$lib/apps/Terminal.svelte"
import AboutApp from "$lib/apps/About.svelte"
import ProjectsApp from "$lib/apps/Projects.svelte"
import ResumeApp from "$lib/apps/Resume.svelte"
import ContactMeApp from "$lib/apps/ContactMe.svelte"

export const APP_REGISTRY = {
    terminal: {
        title: "Terminal",
        icon: Terminal,
        component:TerminalApp,
        defaultSize: {width: 640, height:420},
        defaultPosition: {x: 80, y:64},
        showInDock: true,
        openOnBoot: false
    },
    projects: {
        title: "Projects.app",
        icon: FolderGit2,
        component: ProjectsApp,
        defaultPosition:{x: 160, y: 96},
        defaultSize: {width: 820, height: 540},
        showInDock: true,
    },
    resume: {
        title: "Resume.pdf",
        icon: FileText,
        component: ResumeApp,
        defaultPosition: {x: 220, y: 72},
        defaultSize: {width: 720, height:580},
        showInDock: true,
    },
    contact: {
        title: "Contact_Me",
        icon: Mail,
        component: ContactMeApp,
        defaultPosition: {x: 300, y: 110},
        defaultSize:{width: 480, height: 500},
        showInDock: true
    },
    about:{
        title: "About.md",
        icon: User,
        component: AboutApp,
        defaultPosition:{x: 260, y:130},
        defaultSize:{width:520, height: 440},
        showInDock: true
    }
} satisfies Record<string, AppConfig>