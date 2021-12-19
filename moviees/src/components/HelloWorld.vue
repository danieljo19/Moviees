<template>
<div>
    <link href="/dist/output.css" rel="stylesheet">
  <div class="hello">
    <button type="submit" class="border-solid decoration-pink-500 hover:decoration-blue-400">
      Start!
    </button>
    <h1 class="text-gray-200 text-right">
    Hello world!
    </h1>
  </div>
</div>
</template>

<script>
export default 
{
  name: 'HelloWorld',
  props: 
  {msg: String},
}
</script>

