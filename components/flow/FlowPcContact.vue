<template>
  <div :class="$style.Flow">
    <div :class="$style.RowItems">
      {{ $t('「新型コロナウイルス感染者」との') }}
      <em :class="$style.FlowLine">
        {{ $t('濃厚接触') }}
      </em>
      {{ $t('が疑われる方') }}
    </div>
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
}

.RowItems {
  flex-grow: 1;
  text-align: center;
  margin: 0 4px;

  @include largerThan($large) {
    margin: 0 2em;
  }
}

.FlowLine {
  border-bottom: 2px solid $green-1;
  font-style: inherit;

  @include largerThan($large) {
    border-width: 4px;
  }
}
</style>
