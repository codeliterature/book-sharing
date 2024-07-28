<script>
  import "../app.css";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';

</script>

<header class="font-custom">
  
  <Navbar class="absolute top-0">
    <NavBrand href="/">
      <img src="/light.svg" class="me-3 h-6 sm:h-9" alt="BookStellar Logo" />
    </NavBrand>
    <div class="flex md:order-2">
      <Button size="sm">Get started</Button>
      <NavHamburger />
    </div>
    <NavUl class="order-1">
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/faq">FAQ</NavLi>
    </NavUl>
  </Navbar>
  
</header>
<main class="font-custom my-20">
  <slot />
</main>
<Footer footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand href="https://BookStellar.com" src="/light.svg" alt="BookStellar Logo" />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <FooterLink href="/">About</FooterLink>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/">Terms & Conditions</FooterLink>
      <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <FooterCopyright href="/" by="BookStellar" />
</Footer>



