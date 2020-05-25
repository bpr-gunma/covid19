<template>
  <div :class="$style.Flow">
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <p :class="$style.FlowRowRowThreeGeneral">
          <img
            :class="$style.FlowRowRowThreeGeneralIcon"
            src="/flow/accessibility-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('一般の方') }}
        </p>
      </div>
    </div>
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <div :class="$style.FlowRowRowThreeCheckBox">
          <img
            :class="$style.FlowRowRowThreeCheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('高熱') }}
        </div>
        <div :class="$style.FlowRowRowThreeCheckBox">
          <img
            :class="$style.CheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('強いだるさ（倦怠感）') }}
        </div>
        <div :class="$style.FlowRowRowThreeCheckBox">
          <img
            :class="$style.FlowRowRowThreeCheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('息苦しさ（呼吸困難）') }}
        </div>
        <div :class="$style.FlowRowRowThreeCheckBox">
          <img
            :class="$style.FlowRowRowThreeCheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('発熱が続く') }}
        </div>
        <div :class="$style.FlowRowRowThreeCheckBox">
          <img
            :class="$style.FlowRowRowThreeCheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('咳が続く') }}
        </div>
      </div>
    </div>
    <h3 :class="$style.SectionTitle">
      <i18n path="いずれかに該当する場合には {advice} ご相談ください" tag="p">
        <template v-slot:advice>
          <strong>
            {{ $t('すぐに') }}
          </strong>
        </template>
      </i18n>
    </h3>
  </div>
</template>

<style module lang="scss">
.Flow {
  // @include card-container();

  // display: flex;
  // flex-direction: row;
  // padding: 20px 20px !important;
  // position: relative;
  // color: $gray-2;
  @include card-container();

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
//  height: 100%;
  color: $gray-2;

  &Row {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 36%;
    display: flex;
    flex-direction: column;
    text-align: center;

    &RowThree {
      flex-grow: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;

      &General {
        font-weight: bold;

        &Icon {
          display: block;
          margin: auto;
          width: 44px;
          height: 44px;
        }
      }
  
      &CheckBox {
        position: relative;
        border: 2px solid $green-1;
        border-radius: 4px;
        margin: 8px 0;
        padding: 10px;
        max-width: 350px;
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
    }
  }



  .SectionTitle {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    width: 100%;

    strong {
      margin: 0 0.2em;
      font-size: 26px;
      font-weight: bold;
    }
  }
}
</style>
