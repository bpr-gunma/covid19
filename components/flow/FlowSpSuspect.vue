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
        {{ $t('感染の不安') }}
      </li>
    </ul>

    <p :class="$style.duration">
      {{ $t('まずはかかりつけ医等の地域で身近な医療機関に「電話で相談」してください。') }}
    </p>
    <p :class="$style.duration">
      {{ $t('相談する医療機関に迷う場合は、') }}
    </p>
    <a
      v-scroll-to="{
        el: '#consult',
        onDone: onDoneScroll
      }"
      href="#consult"
      :class="[$style.button, $style.clickable]"
    >
      <span :class="$style.text">{{ $t('居住地の「受診・相談センター」へ') }}</span>
      <ArrowForwardIcon :class="$style.icon" />
    </a>
    <p :class="$style.duration">
      {{ $t('地域の医療機関をご案内します。') }}
    </p>  </div>
</template>

<script lang="ts">
import { onDoneScroll } from '@/utils/vueScrollTo'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
import SentimentIcon from '@/static/flow/responsive/sentiment_very_dissatisfied.svg'

export default {
  components: { ArrowForwardIcon, SentimentIcon },
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

.solution {
  margin-top: px2vw(30);
  padding: px2vw(10) px2vw(10);
  border-radius: px2vw(6);
  border: px2vw(3) solid $gray-2;
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

  .solution {
    margin-top: px2vw(30, $vw);
    padding: px2vw(10, $vw) px2vw(10, $vw);
    border-radius: px2vw(6, $vw);
    border: px2vw(2, $vw) solid $gray-2;
  }
}
</style>
