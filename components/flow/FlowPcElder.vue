<template>
  <div :class="$style.Flow">
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <ul :class="$style.FlowRowRowThreeCareTargetList">
          <li :class="$style.FlowRowRowThreeCareTargetListItem">
            {{ $t('ご高齢な方') }}
          </li>
          <li :class="$style.FlowRowRowThreeCareTargetListItem">
            {{ $t('基礎疾患のある方（透析を受けている方、免疫抑制剤や抗がん剤を用いている方を含む）') }}
          </li>
          <li :class="$style.FlowRowRowThreeCareTargetListItem">
            {{ $t('妊娠中の方') }}
          </li>
        </ul>
      </div>
    </div>
    <div :class="[$style.FlowRow, $style.FlowRowRowCheck]">
      <div :class="$style.FlowRowCondition">
        <p>{{ $t('発熱がある') }}</p>
        <img
          :class="$style.FlowRowConditionIcon"
          src="/flow/check_circle-24px.svg"
          aria-hidden="true"
          alt=" "
        />
      </div>
      <div :class="$style.FlowRowCondition">
        <p>{{ $t('咳が出る') }}</p>
        <img
          :class="$style.FlowRowConditionIcon"
          src="/flow/check_circle-24px.svg"
          aria-hidden="true"
          alt=" "
        />
      </div>
    </div>
    <h3 :class="$style.SectionTitle">
      <i18n path="いずれかの症状や風邪の様な症状があれば {immediately} ご相談ください。" tag="p">
        <template v-slot:immediately>
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
  @include card-container();

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
//  padding: 1em 1em 0 1em;
  color: $gray-2;

  &Row {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;

    &RowCheck {
      flex-basis: calc(28% - 20px);
      justify-content: center;
      padding: 1em 1em 0 0.5em;
      margin-right: 10px;
    }

    &RowThree {
      flex-grow: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em 0 0.5em;

      &General {
        font-size: medium;
        font-weight: bold;

        &Icon {
          display: block;
          margin: auto;
          width: 44px;
          height: 44px;
        }
      }

      &CareTargetList {
        margin: 1em 0 1em 24pxs;
        text-align: left;
//        list-style: none;

        &Item {
          font-weight: bold;
//          display: flex;
          display: list-item;
          list-style: disc;
          align-items: left;
        }

        &Item + &Item {
          margin-top: 10px;
        }
      }
    }

    &Condition {
      flex-grow: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      padding: 10px;
      position: relative;
      border: 2px solid $green-1 !important;
      border-radius: 4px;
      background-color: $white;

      p {
        text-align: center;
        display: inline-block;
        margin: 0 !important; // FIXME: IEだとv-applicationのmarginが優先される
        font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
        font-weight: bold;

        @include largerThan($large) {
          font-size: 20px;
        }
      }

      &Large {
        font-size: calc(1rem + ((1vw - 7.68px) * 2.4876));

        @include largerThan($large) {
          font-size: 25px;
        }
      }

      &Small {
        font-size: 15px;
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
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>
