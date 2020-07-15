<template>
  <div>
    <p>this is options page</p>
    <!-- kbkabmllofpkimcjbnbjhekgabahhfak -->
    <!-- chrome-extension://kbkabmllofpkimcjbnbjhekgabahhfak/options/options.html -->
  </div>
</template>

<script>
export default {
  name: 'App',

  created() {
    // chrome.runtime.getBackgroundPage(
    //   function callback(params) {
    //     console.log('getBackground success : ',params);
    //   }
    // );

    chrome.runtime.sendMessage({action: "getBackground"}, function(response) {
      console.log("background getBackground response : " ,response);
    });
    

  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
