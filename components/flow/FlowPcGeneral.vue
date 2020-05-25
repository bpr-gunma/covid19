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
    <div :class="[$style.FlowRow, $style.FlowRowRowCheck]">
      <div :class="$style.FlowRowCondition">
        <p>
          {{ $t('高熱') }}
        </p>
        <img
          :class="$style.FlowRowConditionIcon"
          src="/flow/check_circle-24px.svg"
          aria-hidden="true"
          alt=" "
        />
      </div>
      <div :class="$style.FlowRowCondition">
        <p>
          <i18n
            tag="span"
            :class="$style.FlowRowConditionSmall"
            path="発熱{temperature}"
          >
            <template v-slot:temperature>
              <i18n tag="span" path="{tempNum}以上">
                <template v-slot:tempNum>
                  <span :class="$style.FlowRowConditionLarge">
                    {{ $t('37.5℃') }}
                  </span>
                </template>
              </i18n>
            </template>
          </i18n>
        </p>
        <img
          :class="$style.FlowRowConditionIcon"
          src="/flow/check_circle-24px.svg"
          aria-hidden="true"
          alt=" "
        />
      </div>
      <div :class="$style.FlowRowCondition">
        <p>{{ $t('強いだるさ') }}</p>
        <img
          :class="$style.FlowRowConditionIcon"
          src="/flow/check_circle-24px.svg"
          aria-hidden="true"
          alt=" "
        />
      </div>
      <div :class="$style.FlowRowCondition">
        <p>{{ $t('息苦しさ') }}</p>
        <img
          :class="$style.FlowRowConditionIcon"
          src="/flow/check_circle-24px.svg"
          aria-hidden="true"
          alt=" "
        />
      </div>
    </div>
    <h3 :class="$style.SectionTitle">
      <i18n path="いずれかに該当する場合には {immediately} ご相談ください" tag="p">
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
  height: 100%;
  color: $gray-2;


  &Row {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 36%;
    display: flex;
    flex-direction: column;
    text-align: center;

    &RowCheck {
      flex-basis: calc(28% - 20px);
      margin: 0 10px;
    }

    &RowThree {
      flex-grow: 3;
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

      &CareTargetList {
        margin: 16px 0;
        text-align: left;
        list-style: none;

        &Item {
          font-weight: bold;
          display: flex;
          align-items: center;

          &Icon {
            display: inline-block;
            width: 30px;
            height: 30px;
          }
        }

        &Item + &Item {
          margin-top: 14px;
        }
      }
    }

    &Condition {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      padding: 10px;
      position: relative;
      border: 2px solid $green-1 !important;
      border-radius: 2px;
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

    &Emphasis {
      font-size: 24px;
      font-weight: bold;
      border-bottom: solid 3px $green-1;

      &Day {
        font-size: 41px;
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
      color: $green-1;
//      font-size: 26px;
      font-weight: bold;
    }
  }
}
</style>
