<template>
  <div class="container">
    <h3>Validation Schema</h3>
    <pre><code>{{ code }}</code></pre>
  </div>
</template>
<script setup lang="ts">
const code = `const ValidationSchema = {
  name: (value: string) => {
    if (!value) {
      return "Name is required";
    }
  },
  email: (value: string) => {
    if (!value) {
      return "Email is required";
    }
    if (!value.includes("@")) {
      return "Invalid email";
    }
  },
  phone: (value: string) => {
    if (!value) {
      return "Phone is required";
    }
    if (!/^\\d{10}$/.test(value)) {
      return "Invalid phone number. Must be 10 digits";
    }
  },
  addresses: (value: string[]) => {
    if (value.length === 0) {
      return "Address is required";
    }
    console.log(value);

    const errs = [];
    for (let i = 0; i < value.length; i++) {
      if (!value[i]) {
        errs[i] = "Address is required";
        continue;
      }

      if (value[i].length < 3) {
        errs[i] = "Address must be at least 3 characters";
        continue;
      }

      if (value[i].length > 50) {
        errs[i] = "Address must be at most 50 characters";
      }
    }
    console.log(errs);

    return errs.length ? errs : undefined;
  },
};
`;
</script>
<style lang="sass" scoped>
.container
  margin-block: 2rem
  border: 1px solid #f4f4f4
  border-radius: 5px
  background-color: #f4f4f4
  h3
    padding: 1rem
    margin: 0
    background-color: #e9e9e9
    border-bottom: 1px solid #f4f4f4
    border-radius: 5px 5px 0 0
    font-size: 1.2rem
    font-weight: 500
    color: #333
  pre
    max-height: 500px
    overflow-y: auto
    padding: .8rem 1rem
    border-radius: 5px
    overflow-x: auto
    font-size: 0.9rem
    line-height: 1
    white-space: pre-wrap
    word-wrap: break-word
    font-family: 'Courier New', Courier, monospace
    code
      font-family: 'Courier New', Courier, monospace
      font-size: 0.9rem
      line-height: 1
      white-space: pre-wrap
      word-wrap: break-word
</style>
