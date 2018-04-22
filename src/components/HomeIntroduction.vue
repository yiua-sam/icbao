<template>
  <div class="container">
    <div>
      <h2 class="center title">WHO ARE WE</h2>
    </div>
    <div class="content">
      <section>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
      </section>

      <div class="introduction-items">
        <section class="table-container">
          <img class="wrap-image table-cell" alt="gua bao" src="@/assets/img/gua-bao.jpg">
          <span class="wrap-text-right table-cell">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
        </section>
        <section class="table-container">
                    <span class="wrap-text-left table-cell">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
          <img class="wrap-image table-cell" alt="ice cream roll" src="@/assets/img/ice-cream-roll.jpg">
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

  .content {
    letter-spacing: 1px;
    font-size: 17px;
    font-weight: ;
  }

  .introduction-items {
    margin-top: 35px;
  }

  .wrap-image {
    width: 100%;
    border-radius: 100%;
  }

  .wrap-text-left {
    padding-right: 30px;
    vertical-align: middle;
  }

  .wrap-text-right {
    padding-left: 30px;
    vertical-align: middle;
  }
</style>
