<template>
  <div class="contactForm">
    <form
        action="https://formeezy.com/api/v1/forms/6377e55884db710008dfb4c0/submissions"
        method="POST"
        enctype="multipart/form-data">
      <FormInput
          name="name"
          size="md"
          placeholder="Vaše jméno"
          suffix-type="warning">
        <template #label>
          Jméno
        </template>

        <template #suffix>
          Prosím vyplňte své jméno i příjmení.
        </template>
      </FormInput>

      <FormInput
          name="email"
          size="md"
          type="email"
          placeholder="Vaše emailová adresa">
        <template #label>
          Email
        </template>
      </FormInput>

      <FormInput
          name="message"
          size="md"
          type="textarea"
          placeholder="Vaše zpráva"
          textarea>
        <template #label>
          Zpráva
        </template>
      </FormInput>

      <Button text="Odeslat" send />
    </form>
  </div>
</template>

<style lang="sass" scoped>
.contactForm
  padding: 1rem
</style>
