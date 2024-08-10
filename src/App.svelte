<script>
    import Divider from "./lib/components/Divider.svelte";
    import NavLink from "./lib/components/NavLink.svelte";
    import Home from "./lib/pages/Home.svelte";
    import Members from "./lib/pages/Members.svelte";
    import Services from "./lib/pages/Services.svelte";
    import { pageStore } from "./lib/stores";
</script>

<div class="container py-4 mx-auto h-screen">
    <div class="p-4 w-full h-full rounded-md border-2 content bg-neutral-950 border-neutral-800">
        <header>
            <h1 class="text-4xl font-bold">MadHouse Labs</h1>
            <p class="max-w-2xl text-sm italic text-neutral-400">L H C B L 👽</p>
            <div class="flex gap-4">
                <NavLink page="home">Home</NavLink>
                <NavLink page="members">Members</NavLink>
                <NavLink page="services">Services</NavLink>
                <a
                    class="text-white underline transition-all hover:tracking-wider hover:font-bold focus:tracking-wider focus:font-bold"
                    href="https://status.madhouselabs.net/status/madhouse">Status</a
                >
            </div>
        </header>
        <Divider></Divider>
        <main>
            {#if $pageStore === "home"}
                <Home></Home>
            {:else if $pageStore === "members"}
                <Members></Members>
            {:else if $pageStore === "services"}
                <Services></Services>
            {/if}
        </main>
    </div>
</div>

<style>
    .content {
        box-shadow: 5px 5px rgb(38, 38, 38, 0.65);
    }
</style>
