<script>
    import { appStatus, setAppStatusChatMode, setAppStatusError, setAppStatusLoading } from '../store'
    import Dropzone from "svelte-file-dropzone";
  
    let files = {
      accepted: [],
      rejected: []
    };
  
    async function handleFilesSelect(e) {
      const { acceptedFiles, fileRejections } = e.detail;
      console.log(acceptedFiles)
      files.accepted = [...files.accepted, ...acceptedFiles];
      files.rejected = [...files.rejected, ...fileRejections];

      if (acceptedFiles.length > 0){
        const formData = new FormData()
        formData.append('file',acceptedFiles[0])
        setAppStatusLoading()
        const res = await fetch('/api/upload',{
            method: 'POST',
            body: formData
        })
        if (!res.ok){
             setAppStatusError()
             return
        }
        const { id, url, pages } = await res.json()
        setAppStatusChatMode({ id, url, pages})
      }
    }
  </script>
  {#if files.accepted.length == 0}
    <Dropzone 
        accept="application/pdf" 
        multiple={false}
        on:drop={handleFilesSelect}>Arrastra y suelta aqui tu PDF
    </Dropzone>
  {/if}

  <ol>
    {#each files.accepted as item}
      <li>{item.name}</li>
    {/each}
  </ol>