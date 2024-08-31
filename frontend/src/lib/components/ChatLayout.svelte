<script>
  import Avatar from './Aavatar.svelte';
  import Button from './Button.svelte';

  import sendIcon from '../../assets/send-icon.svg';

  export let imageUrl;
  export let name = '';
</script>

<style lang='scss'>
  .header {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 20px;
    padding: 15px 20px;
    &__title {
      font-family: 'Roboto-Regular';
      font-size: 1.875rem;
      color: #000;
      margin-left: 20px;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    background: #fff;
    width: 100%;
    border-radius:  20px;
    position: absolute;
    bottom: var(--footer-margin);
    padding: 15px 20px;
    box-sizing: border-box;

    :global(.footer__btn) {
      max-width: 225px;
      margin-left: auto;
      display: flex;
      flex: .2;
      align-items: center;
      border-radius: 20px;
      padding: 15px 30px;
      margin-left: 20px;
      background: var(--primary-color-dim);
    }

    :global(.footer__btn):hover {
      background: var(--primary-color);
    }

    &__btn-text {
      font-family: 'Roboto-Regular';
      font-size: 26px;
      color: #fff;
      margin-right: 10px;
    }

    &__input {
      flex: .8;
      border: none;
      outline: none;
      font-family: 'Roboto-Regular';
      font-size: 26px;

      &::placeholder {
        color: #AEAEAE;
      }
    }
  }

</style>

<div>
  <header class='header'>
    <Avatar
      imageUrl={imageUrl}
    />
    <h3 class='header__title'>
      {name}
    </h3>
  </header>
  <slot />
  <footer class='footer'>
    <input placeholder='Type message here...' type='text' class='footer__input' />
    <Button on:click={() => { alert('Отправляем...')} } class='footer__btn'>
      <span class='footer__btn-text'>
        Отправить
      </span>
      <img src={sendIcon} alt='send' />
    </Button>
  </footer>
</div>