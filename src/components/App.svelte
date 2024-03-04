<script>
    import { Alert, P } from 'flowbite-svelte';
    import { APP_STATUS, appStatus } from '../store'
    import StepLoading from './StepLoading.svelte';
    import StepChat from './StepChat.svelte';
    import StepUpload from './StepUpload.svelte';
</script>

<!-- EL $ en la store es para observar el valor que tienen -->

{#if $appStatus == APP_STATUS.INIT}
    <StepUpload/>
{:else if $appStatus == APP_STATUS.LOADING}
    <StepLoading/>
{:else if $appStatus == APP_STATUS.CHAT_MODE}
    <StepChat/>
{:else if $appStatus == APP_STATUS.ERROR}
    <Alert>
        <span class="font-medium">Algo malo a pasado!</span>
        Hay un error en la aplicación
    </Alert>
{:else}
    <Alert>
        <span class="font-medium">Acción no reconocida</span>
        Este estado de la aplicación no está conocido
    </Alert>
{/if}



