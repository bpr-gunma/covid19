<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]">
        <SentimentIcon aria-hidden="true" />
      </span>
      <span :class="$style.fzMedium">{{ $t('不安に思う方') }}</span>
    </p>

    <ul :class="[$style.rectContainer, $style.triple]">
      <li :class="$style.symptom">
        {{ $t('微熱') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('軽い咳') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('感染の不安') }}
      </li>
    </ul>

    <div :class="[$style.rect, $style.solution]">
      <p>{{ $t('かかりつけ医にご相談ください。') }}</p>
    </div>
    <div :class="$style.callcenter">
      <a
        v-scroll-to="{
          el: '#consult',
          onDone: onDoneScroll
        }"
        href="#consult"
        :class="[$style.button, $style.clickable]"
      >
        <span :class="$style.text">{{ $t('かかりつけ医がいない方は、新型コロナ感染症コールセンターへ') }}</span>
        <ArrowForwardIcon :class="$style.icon" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { onDoneScroll } from '@/utils/vueScrollTo'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
import PhoneIcon from '@/static/flow/responsive/phone.svg'
import SentimentIcon from '@/static/flow/responsive/sentiment_very_dissatisfied.svg'

export default {
  components: { ArrowForwardIcon, PhoneIcon, SentimentIcon },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.rectContainer {
  // suspect
  &.triple {
    margin-left: px2vw(-11);
    margin-right: px2vw(-11);

    > .symptom {
      margin-left: px2vw(11);
      margin-right: px2vw(11);
      flex-grow: 10;
    }
  }
}

.rect {
  min-height: px2vw(188);
  padding: px2vw(20) px2vw(10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex: 0 0 48%;
  border-radius: px2vw(6);
  font-size: px2vw(24);
  text-decoration: none !important;
  color: inherit !important;
  text-align: center;
  font-weight: bold;

  &.solution {
    border: px2vw(3) solid $gray-4;
    // icon
    padding-top: px2vw((46 + 20 * 2));
    position: relative;
  }
}

// suspect
.callcenter {
  margin-top: px2vw(25);
  text-align: left;
}

@include largerThan($small) {
  $vw: 960;

  .rectContainer {
    &.triple {
      margin-left: px2vw(-11, $vw);
      margin-right: px2vw(-11, $vw);

      > .symptom {
        margin-left: px2vw(11, $vw);
        margin-right: px2vw(11, $vw);
      }
    }
  }
  // suspect
  .callcenter {
    margin-top: px2vw(25, $vw);
    text-align: left;
  }
}
</style>
