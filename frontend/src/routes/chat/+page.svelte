<script lang="ts">
  import ChatLayout from "../../lib/components/ChatLayout.svelte";
  import Message from "../../lib/components/Message.svelte";

  export let user: { id: string; name: string } | null;

  const imageUrl = '../src/assets/girl-face.png';
  const name = user?.name ?? 'Анонимный пользователь'; // Используем имя пользователя, если он авторизован
</script>

<style>
  .chat {
    height: calc(100vh - var(--footer-margin) - var(--footer-height) *2 - var(--chat-inner-margin) - 25px);
    background: #fff;
    border-radius: 20px;
    margin-top: 25px;
    padding: 20px;
    overflow-y: scroll;

    /* width */
    &::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 7px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
</style>

<ChatLayout name={name} imageUrl={imageUrl}>
  <div class='chat'>
    <Message avatarImageUrl={imageUrl} text='Прикинь, что вчера было...' />
    <Message text='Ну, давай, рассказывай! Я готов! :))' />
    <Message
      avatarImageUrl={imageUrl}
      text="Рассказываю. Крч, пошла я вчера с подругами гулять...
        На Думскую... Через час устала и уехала домой спать. 
        И знаешь что?"
    />
    <Message text="Что?" />
    <Message
      avatarImageUrl={imageUrl}
      text="И блин. Не знаю как, но я проснулась в Испании. Без денег. Сможешь 
        занять на билет обратно?:(("
    />
    <Message text="Я бы с радостью, но у нас же переводы заблокированы" />
    <Message avatarImageUrl={imageUrl} text="Капец..." />
    <Message text="....." />
  </div>
</ChatLayout>