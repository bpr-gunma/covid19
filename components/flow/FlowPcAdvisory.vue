<template>
  <div :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div>
          <span :class="$style.AdvisoryContentsTitle">{{
            $t('新型コロナ感染症コールセンター')
          }}</span>
        </div>
      </div>
      <div :class="$style.AdvisoryContents">
        <div class="pt-4">
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('平日（日中）') }}
          </div>
          <span>{{ $t('午前9時から午後9時') }}</span><br />
          <span>{{ $t('土日祝 含む') }}</span>
        </div>
        <div
          :class="[
            $style.AdvisoryTelephoneArea,
            $style.AdvisoryBlockCentering
          ]"
        >
          <a :class="$style.AdvisoryTelephone" href="tel:0570082820">
            <img
              :class="$style.AdvisoryTelephoneIcon"
              src="/flow/phone-24px.svg"
              aria-hidden="true"
              :alt="$t('電話番号')"
            />
            0570-082-820
          </a>
        </div>
        <div v-if="!['ja', 'ja-basic'].includes($i18n.locale)" class="pt-8">
          <span>{{ $t('ひまわり') }}</span>
        </div>
      </div>
      <hr :class="$style.AdvisoryLine"/>
      <div :class="$style.AdvisoryContents">
        <div class="pt-4">
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('平日（夜間）') }}
          </div>
          <span>{{ $t('午後5時から翌朝午前9時') }}</span><br />
          <span>{{ $t('土日祝 終日') }}</span>
        </div>
        <div
          :class="[
            $style.AdvisoryTelephoneArea,
            $style.AdvisoryBlockCentering
          ]"
        >
          <a :class="$style.AdvisoryTelephone" href="tel:0272231111">
            <img
              :class="$style.AdvisoryTelephoneIcon"
              src="/flow/phone-24px.svg"
              aria-hidden="true"
              :alt="$t('電話番号')"
            />
            027-223-1111
          </a>
        </div>
        <div v-if="!['ja', 'ja-basic'].includes($i18n.locale)" class="pt-8">
          <span>{{ $t('ひまわり') }}</span>
        </div>
      </div>
        <div :class="$style.AdvisoryCenter">
          <div :class="$style.AdvisoryCenterTitle">前橋市、高崎市に在住の方は保健所へ相談</div>
          <div :class="$style.AdvisoryCenterContents">
            <div :class="$style.AdvisoryCenterContentsHelth">前橋市保健所</div>
            <div :class="$style.AdvisoryCenterContentsTime">【平日】午前8時30分～午後5時15分</div>
            <div :class="$style.AdvisoryCenterContentsTel">
              <a :class="$style.AdvisoryCenterContentsTelNumber" href="tel:0272201151">
                <img
                  :class="$style.AdvisoryCenterContentsTelNumberIcon"
                  src="/flow/phone-24px.svg"
                  aria-hidden="true"
                  :alt="$t('電話番号')"
                />
                027-220-1151
              </a>
            </div>
            <div :class="$style.AdvisoryCenterContentsTime">【夜間、土、日、祝日】</div>
            <div :class="$style.AdvisoryCenterContentsTel">
              <a :class="$style.AdvisoryCenterContentsTelNumber" href="tel:0272241111">
                <img
                  :class="$style.AdvisoryCenterContentsTelNumberIcon"
                  src="/flow/phone-24px.svg"
                  aria-hidden="true"
                  :alt="$t('電話番号')"
                />
                027-224-1111
              </a>
            </div>
            <div :class="$style.AdvisoryCenterContentsHelth">高崎市保健所</div>
            <div :class="$style.AdvisoryCenterContentsTime">【平日】午前8時30分～午後9時</div>
            <div :class="$style.AdvisoryCenterContentsTel">
              <a :class="$style.AdvisoryCenterContentsTelNumber" href="tel:0273816112">
                <img
                  :class="$style.AdvisoryCenterContentsTelNumberIcon"
                  src="/flow/phone-24px.svg"
                  aria-hidden="true"
                  :alt="$t('電話番号')"
                />
                027-381-6112
              </a>
            </div>
            <div :class="$style.AdvisoryCenterContentsTime">【夜間、土、日、祝日】</div>
            <div :class="$style.AdvisoryCenterContentsTel">
              <a :class="$style.AdvisoryCenterContentsTelNumber" href="tel:0273816123">
                <img
                  :class="$style.AdvisoryCenterContentsTelNumberIcon"
                  src="/flow/phone-24px.svg"
                  aria-hidden="true"
                  :alt="$t('電話番号')"
                />
                027-381-6123
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.Advisory {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: $gray-2;

  &Container {
    background-color: $gray-5;
    border-radius: 4px;
    height: 100%;
    padding: 20px 15px 20px 15px;
    text-align: center;
  }

  &Contents {
    font-weight: bold;

//    &:not(:first-child) {
//      border-top: 0.5px solid $gray-4;
//    }

    &Title {
      font-size: 20px;
      line-height: 22px;
      margin: 10px auto;
    }

    &Title2 {
      font-size: 18px;
    }

    &SubTitle {
      font-size: 18px;
    }

    &ColsSentense {
      line-height: 18px;
    }
  }

  &BlockCentering {
    display: flex;
    justify-content: center;
  }

  &Line {
    border-width: 1px 0px 0px 0px;
    border-style: dotted;
    border-color: $green-1;
  }

  &Link {
    line-height: 22px;
    text-align: left;

    a {
      color: $green-2;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &TelephoneArea {
    display: inline-flex;
  }

  &Telephone {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    margin: 12px auto;

    &:link,
    &:visited,
    &:hover,
    &:active,
    &:focus {
      color: inherit;
      text-decoration: none;
      outline: 1px dotted $gray-3;
    }

    &Icon {
      display: inline-block;
      margin-right: 5px;
      width: 26px;
      height: 26px;
    }
  }

  &BoxContainer {
    border-radius: 4px;
    text-align: center;
    padding: 20px 10px;
    margin: 20px auto;
  }

  &WhiteBox {
    background-color: $white;
    max-width: 160px;
    padding: 10px;

    &Sentense {
      color: $green-1;
      font-size: 18px;
      font-weight: bold;
    }
  }

  &Center {
    margin-top: 10px;
    background: $white;
    border: solid 3px $green-1;
    border-radius: 8px;
    color: $gray-2;

    &Title {
//     font-size: 1em;
      background: $green-1;
      padding: 4px;
      text-align: left;
      color: $white;
      font-weight: bold;
      letter-spacing: 0.05em;
    }
    
    &Contents {
//      font-size: 0.8em;
      padding: 5px;
      text-align: left;
      border-radius: 0px 0px 8px 8px;

      &Helth {
//        margin: 0px 10px;
        font-weight: bold;
      }
      &Time {
        font-size: 0.8em;
//        margin: 0px 10px;
      }
      &Tel {
        display: inline-flex;
//        margin: 0px 20px;

        &Number {
          display: flex;
          text-align: center;
          align-items: center;
//          font-size: 24px;
//          font-weight: bold;
          margin: 0 auto;

          &:link,
          &:visited,
          &:hover,
          &:active,
          &:focus {
            color: inherit;
            text-decoration: none;
            outline: 1px dotted $gray-3;
          }

          &Icon {
            display: inline-block;
            margin-right: 4px;
            width: 15px;
            height: 15px;
          }
        }
      } 
    }
  }
}
</style>
