<script>
	import FooterLinks from "./FooterLinks.svelte";
    import { getContext } from "svelte";

    const title = getContext('site.title');
</script>

<footer class="flex justify-between flex-wrap bg-black p-4 gap-2">
    <div class="text-white italic">&copy;2023 {title}</div>
    <div class="text-blue flex flex-wrap gap-5">
        <FooterLinks href="#">About</FooterLinks>
        <FooterLinks href="#">Support</FooterLinks>
        <FooterLinks href="#">Privacy</FooterLinks>
        <FooterLinks href="#">Contact</FooterLinks>
    </div>
</footer>