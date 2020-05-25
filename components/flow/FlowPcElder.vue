<template>
  <div :class="$style.FlowComponent">
    <div :class="[$style.SubtleBox, $style.Box]">
      <div :class="$style.RowItems">
        <div :class="$style.RowItemsHeader">
          {{ $t('ご高齢な方') }}<br />
          {{ $t('基礎疾患のある方') }}<br />
          {{ $t('妊娠中の方') }}
        </div>
      </div>
      <div :class="$style.RowItems">
        <div :class="$style.CheckBox">
          <img
            :class="$style.CheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('発熱がある') }}
        </div>
        <div :class="$style.CheckBox">
          <img
            :class="$style.CheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('咳が出る') }}
        </div>
      </div>
      <div :class="$style.RowItemsFooter">
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

.CheckBox {
  position: relative;
  border: 2px solid $green-1;
  border-radius: 4px;
  margin: 8px 0;
  padding: 10px;
  max-width: 300px;
  text-align: center;
  font-weight: bold;
  font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));

  @include largerThan($large) {
    font-size: 20px;
  }

  &Icon {
    position: absolute;
    left: -8px;
    top: -8px;
    width: 24px;
    height: 24px;
  }

  &::before {
    position: absolute;
    left: -4px;
    top: -4px;
    width: 20px;
    height: 20px;
    background-color: white;
    content: '';
  }
}

.SubtleBox {
  @include card-container();

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
}

.ContentBox {
  @include card-container();

  font-size: larger;
  text-align: left;
  padding: 0.8em 1.2em;
}

.Box {
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
//  width: 100%;
  flex-direction: row;

  &Icon {
    position: absolute;
    bottom: 20%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
  }
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

.RowItemsFooter {
    display: flex;
    width: 100%;
    padding: 0 15px;
    margin-top: 15px;
    justify-content: right;
    align-items: stretch;
    text-align: right;
    font-weight: bold;
    font-size: 22px;

    @include largerThan($large) {
      padding: 0 20px;
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
