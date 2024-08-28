import { writable, type Writable } from "svelte/store";

export type Page = "home" | "members" | "services" | "missing";
export let pageStore: Writable<Page> = writable("home");
