<script>
    import ServiceLink from "../components/ServiceLink.svelte";
    import ServiceLinkContainer from "../components/ServiceLinkContainer.svelte";
    import ServiceLinkTitle from "../components/ServiceLinkTitle.svelte";
</script>

<ServiceLinkTitle>File Hosting</ServiceLinkTitle>
<ServiceLinkContainer>
    <ServiceLink href="https://cdn.madhouselabs.net">cirro's file uploader</ServiceLink>
    <ServiceLink href="https://mono.dev.madhouselabs.net">monofile</ServiceLink>
    <ServiceLink href="https://cloud.madhouselabs.net">
        Nextcloud <span class="text-xs text-neutral-400">[deprecated]</span>
    </ServiceLink>
</ServiceLinkContainer>

<ServiceLinkTitle>Game Services</ServiceLinkTitle>
<ServiceLinkContainer>
    <ServiceLink href="https://pterodactyl.madhouselabs.net">Pterodactyl</ServiceLink>
</ServiceLinkContainer>

<ServiceLinkTitle>Social Services</ServiceLinkTitle>
<ServiceLinkContainer>
    <ServiceLink href="https://mail.madhouselabs.net">Mail</ServiceLink>
    <ServiceLink href="https://chadthundercock.com">Mastodon</ServiceLink>
</ServiceLinkContainer>

<ServiceLinkTitle>Multimedia Services</ServiceLinkTitle>
<ServiceLinkContainer>
    <ServiceLink href="https://media.madhouselabs.net">Jellyfin</ServiceLink>
</ServiceLinkContainer>

<ServiceLinkTitle>Developer/Internal</ServiceLinkTitle>
<ServiceLinkContainer>
    <ServiceLink href="https://git.madhouselabs.net">Forgejo</ServiceLink>
    <ServiceLink href="https://auth.madhouselabs.net">Keycloak</ServiceLink>
    <ServiceLink href="https://minio-console.madhouselabs.net">Minio</ServiceLink>
    <ServiceLink href="https://coolify.madhouselabs.net">Coolify</ServiceLink>
    <ServiceLink href="https://portainer.madhouselabs.net">
        Portainer <span class="text-xs text-neutral-400">[deprecated]</span>
    </ServiceLink>
</ServiceLinkContainer>
