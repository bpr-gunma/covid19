<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('新型コロナ感染症') }}<br />
      {{ $t('コールセンター') }}
    </h4>
    <dl>
      <div>
        <dt>
          <ul :class="[$style.callcenter]">
            <li>
              <span :class="[$style.fzLarge, $style.break, $style.mb7]">
                {{ $t('午前9時から午後9時') }}
              </span>
            </li>
          </ul>
        </dt>
        <dd>
          <div :class="[$style.phone, $style.fzNumeric]">
            <span :class="$style.icon">
              <PhoneIcon alt="Phone" />
            </span>
            <a href="tel:0570082820">0570-082-820</a>
          </div>
          <div
            v-if="!['ja', 'ja-basic'].includes($i18n.locale)"
            :class="[$style.phone, $style.fzNumeric]"
          >
            <span :class="[$style.fzMedium, $style.break, $style.mb7]">
              {{ $t('ひまわり') }}
            </span>
          </div>
        </dd>
      </div>
      <hr :class="$style.line" />
      <div>
        <dt>
          <ul :class="[$style.callcenter]">
            <li>
              <span :class="[$style.fzLarge, $style.break, $style.mb7]">
                {{ $t('上記以外の時間') }}
              </span>
            </li>
          </ul>
        </dt>
        <dd>
          <div :class="[$style.phone, $style.fzNumeric]">
            <span :class="$style.icon">
              <PhoneIcon alt="Phone" />
            </span>
            <a href="tel:0272231111">027-223-1111</a>
          </div>
          <div
            v-if="!['ja', 'ja-basic'].includes($i18n.locale)"
            :class="[$style.phone, $style.fzNumeric]"
          >
            <span :class="[$style.fzMedium, $style.break, $style.mb7]">
              {{ $t('ひまわり') }}
            </span>
          </div>
        </dd>
      </div>
    </dl>
    <div :class="$style.center">
      <div :class="[$style.title, $style.fzLarge]">前橋市、高崎市に在住の方は居住地の保健所へ相談</div>
      <div :class="$style.contents">
        <dl>
          <dt :class="[$style.helth, $style.fzLarge]">前橋市保健所</dt>
          <dd>
            <ul>
              <li :class="[$style.fzRegular]">【毎日】午前8時30分～午後9時</li>
              <li>
                <div :class="[$style.phone, $style.centerphone, $style.fzXLarge]">
                  <span :class="$style.icon">
                    <PhoneIcon alt="Phone" />
                  </span>
                  <a href="tel:0272201151">027-220-1151</a>
                </div>
              </li>
              <li :class="[$style.fzRegular]">【上記以外の時間で緊急の場合】</li>
              <li>
                <div :class="[$style.phone, $style.centerphone, $style.fzXLarge]">
                  <span :class="$style.icon">
                    <PhoneIcon alt="Phone" />
                  </span>
                  <a href="tel:0272241111">027-224-1111</a>
                </div>
              </li>
            </ul>
          </dd>
          <dt :class="[$style.helth, $style.fzLarge]">高崎市保健所</dt>
          <dd>
            <ul>
              <li :class="[$style.fzRegular]">【平日】午前8時30分～午後9時</li>
              <li>
                <div :class="[$style.phone, $style.centerphone, $style.fzXLarge]">
                  <span :class="$style.icon">
                    <PhoneIcon alt="Phone" />
                  </span>
                  <a href="tel:0273816112">027-381-6112</a>
                </div>
              </li>
              <li :class="[$style.fzRegular]">【上記以外の時間で緊急の場合】</li>
              <li>
                <div :class="[$style.phone, $style.centerphone, $style.fzXLarge]">
                  <span :class="$style.icon">
                    <PhoneIcon alt="Phone" />
                  </span>
                  <a href="tel:0273816123">027-381-6123</a>
                </div>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PhoneIcon from '@/static/flow/responsive/phone.svg'

export default {
  components: { PhoneIcon }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

// advisory
.line {
    border-width: px2vw(1) 0 0 0;
    color: $gray-4;
    margin: px2vw(30) auto;
}

.callcenter {
  margin: px2vw(20) auto;
  padding-left: 0 !important;
  text-align: center;

  > li {
    list-style-type: none;

    &:not(:first-child) {
      margin-top: px2vw(20);
    }
  }
}

.center {
  margin-top: px2vw(40);
  margin-left: px2vw(5);
  margin-right: px2vw(5);
  background: $white;
  border: solid px2vw(3) $green-1;
  border-radius: px2vw(8);
  color: $gray-2;  

  .title {
    background: $green-1;
    padding: px2vw(7) px2vw(6);
    text-align: left;
    color: $white;
    font-weight: bold;
  }

  .contents {
    text-align: center;
    border-radius: 0 0 px2vw(8) px2vw(8);

    .helth {
      margin: px2vw(15) 0;
    }

    ul {
      list-style-type: none;
      margin-left: 0;
      padding-left: 0;
    }

    li {
      &:not(:first-child) {
        margin-top: px2vw(10);
      }

      &:last-child {
        margin-bottom: px2vw(30);
      }
    }
  }
}

.centerphone {
  .icon {
    width: px2vw(27);
    height: px2vw(27);
    margin-right: px2vw(7);
  }
}

@include largerThan($small) {
  $vw: 960;

  .line {
    border-width: px2vw(1, $vw) 0 0 0;
    margin: px2vw(30, $vw) auto;
  }

  .callcenter {
    margin: px2vw(30, $vw) auto;

  > li {
      &:not(:first-child) {
        margin-top: px2vw(20, $vw);
      }
    }
  }

  .center {
    margin-top: px2vw(40, $vw);
    margin-left: px2vw(5, $vw);
    margin-right: px2vw(5, $vw);
    border: solid px2vw(3, $vw) $green-1;
    border-radius: px2vw(8, $vw);
  
    .title {
      padding: px2vw(7, $vw) px2vw(5, $vw);
    }
    
    .contents {
      border-radius: 0 0 px2vw(8, $vw) px2vw(8, $vw);

      .helth {
        margin: px2vw(15, $vw) 0;
      }

      li {
        &:not(:first-child) {
          margin-top: px2vw(10, $vw);
        }

        &:last-child {
          margin-bottom: px2vw(30, $vw);
        }
      }
    }  
  }

  .centerphone {
    .icon {
      width: px2vw(27, $vw);
      height: px2vw(27, $vw);
      margin-right: px2vw(7, $vw);
    }
  }
}
</style>
