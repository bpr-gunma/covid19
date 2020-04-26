<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('新型コロナ感染症コールセンター') }}
    </h4>
    <dl>
      <div>
        <dt>
          <ul :class="[$style.night]">
            <li>
              <span :class="[$style.fzMedium, $style.break, $style.mb7]">
                {{ $t('平日（日中）') }}
              </span>
              {{ $t('午前9時から午後9時') }}<br />
              {{ $t('土日祝 含む') }}
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
          <ul :class="[$style.night]">
            <li>
              <span :class="[$style.fzMedium, $style.break, $style.mb7]">
                {{ $t('平日（夜間）') }}
              </span>
              {{ $t('午後5時から翌朝午前9時') }}<br />
              {{ $t('土日祝 終日') }}
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
      <div :class="$style.title">前橋市、高崎市に在住の方は保健所へ相談</div>
      <div :class="$style.contents">
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
.daytime {
  margin-top: px2vw(20);
  display: flex;
  border-top: 1px solid $gray-4;
  border-bottom: 1px solid $gray-4;

  > * {
    padding: px2vw(30) px2vw(10);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
    flex-basis: 40%;
  }

  .link {
    flex-basis: 60%;

    > a {
      text-decoration: none;
    }
  }
}

.line {
    border-width: px2vw(1) 0 0 0;
    color: $gray-4;
    margin: px2vw(20) auto;
}

.night {
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
  margin-top: px2vw(30);
  background: $white;
  border: solid px2vw(3) $green-1;
  border-radius: px2vw(8);
  color: $gray-2;  

  .title {
    background: $green-1;
    padding: px2vw(4) px2vw(10);
    text-align: left;
    color: $white;
    font-weight: bold;
  }
  
  .contents {
    padding: px2vw(5);
    text-align: center;
    border-radius: 0 0 px2vw(8) px2vw(8);
  }
 }

@include largerThan($small) {
  $vw: 960;

  .night {
    margin: px2vw(30, $vw) auto;

    > li {
      &:not(:first-child) {
        margin-top: px2vw(20, $vw);
      }
    }
  }
}
</style>
