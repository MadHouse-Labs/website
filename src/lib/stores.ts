import { writable, type Writable } from "svelte/store";

export type Page = "home" | "members" | "services";
export let pageStore: Writable<Page> = writable("home");
