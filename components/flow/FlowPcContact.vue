<template>
  <div :class="$style.FlowComponent">
    <div :class="[$style.SubtleBox, $style.Box]">
      <div :class="$style.RowItems">
        {{ $t('いずれかに該当する場合にはすぐにご相談ください') }}
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.FlowComponent {
  color: $gray-2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.SubtleBox {
  @include card-container();

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
}

.Box {
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
//  width: 100%;
  flex-direction: row;
}

.RowItems {
  flex-grow: 1;
  text-align: center;
  margin: 0 4px;

  @include largerThan($large) {
    margin: 0 2em;
  }
}

.RowItemsHeader {
//  color: $green-1;
  font-size: medium;
  font-weight: bold;

  &Icon {
    display: block;
    margin: auto;
    width: 45px;
    height: 45px;
  }
}

.FlowArrow {
  position: absolute;
  margin: 0 -20px;
  z-index: 1;
}

.LargerText {
  font-size: larger;
  font-weight: bold;
}

.MediumText {
  font-size: medium;
  font-weight: bold;
}

.Center {
  text-align: center;
}

.SmallerText {
  font-size: smaller;
}
</style>
