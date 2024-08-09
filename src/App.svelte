<script>
    import Divider from "./lib/components/Divider.svelte";
    import NavLink from "./lib/components/NavLink.svelte";
    import Home from "./lib/pages/Home.svelte";
    import Members from "./lib/pages/Members.svelte";
    import Services from "./lib/pages/Services.svelte";
    import { pageStore } from "./lib/stores";
</script>

<div class="container mx-auto h-screen py-4">
    <div class=" content w-full h-full bg-neutral-950 p-4 border-2 border-neutral-800 rounded-md">
        <header>
            <h1 class="text-4xl font-bold">MadHouse Labs</h1>
            <p class="text-neutral-400 max-w-2xl text-sm italic">Don't call them bitches bro!</p>
            <div class="flex gap-4">
                <NavLink page="home">Home</NavLink>
                <NavLink page="members">Members</NavLink>
                <NavLink page="services">Services</NavLink>
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
        box-shadow: 5px 5px rgb(38, 38, 38);
    }
</style>
