<script>
    import { Router, Route } from "svelte-routing";
    import Main from "./Main.svelte"
    import UploadPdf from "./UploadPDF.svelte";
</script>

<Router>
    <Route path="/" component="{UploadPdf}" />
    <Route path="/editor" component="{Main}" />
</Router>