<template>
  <div :class="$style.Flow">
    <h3 :class="$style.SectionTitle">
      {{ $t('「新型コロナウイルス感染者」との') }}
      <em :class="$style.FlowLine">
        {{ $t('濃厚接触') }}
      </em>
      {{ $t('が疑われる方') }}
    </h3>
  </div>
</template>

<style module lang="scss">
.Flow {
  @include card-container();

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;
  color: $gray-2;

  .SectionTitle {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;

    .FlowLine {
      border-bottom: 2px solid $green-1;
      font-style: inherit;

      @include largerThan($large) {
        border-width: 4px;
      }
    }
  }
}
</style>
