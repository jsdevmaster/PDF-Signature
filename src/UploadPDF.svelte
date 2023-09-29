<script>
    import { navigate } from 'svelte-routing';
    import Tailwind from "./Tailwind.svelte";
    import { uploadePDFFile } from './store.js';

    async function onUploadPDF(e) {
        const files = e.target.files || (e.dataTransfer && e.dataTransfer.files);
        const file = files[0];
        if (!file || file.type !== "application/pdf") return;
        // selectedPageIndex = -1;
        try {
            // await addPDF(file);
            uploadePDFFile.set(file);
            // selectedPageIndex = 0;
            navigate('/editor'); 
        } catch (e) {
            console.log(e);
        }
    }
</script>

<svelte:window
  on:dragenter|preventDefault
  on:dragover|preventDefault
  on:drop|preventDefault={onUploadPDF} />
<Tailwind />

<input
    type="file"
    name="pdf"
    id="pdf"
    on:change={onUploadPDF}
    class="hidden" />

<div class="flex justify-center items-center h-screen">
    <label class=" bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded p-10 cursor-pointer" for="pdf">
        <h2 class="mb-5">Sign PDF now</h2>
        <img src="pdf-file.svg" alt="An icon for pdf file" class="m-auto" width="50" height="50" />
        <h3 class="mt-5">Drop your file or Choose file</h3>
    </label>
</div>