<template>
  <div :class="$style.container">
    <div :class="[$style.heading, $style.multi]">
<!--      <span :class="[$style.item, $style.fzMedium]">
        {{ $t('・ご高齢な方') }}
      </span>
      <span :class="[$style.item, $style.fzMedium]">
        {{ $t('・妊娠中の方') }}
      </span>
      <span :class="[$style.item, $style.fzMedium]">
        {{ $t('・基礎疾患のある方（透析を受けている方、免疫抑制剤や抗がん剤を用いている方を含む）') }}
      </span>-->
      <ul :class="[$style.list, $style.fzMedium]">
        <li :class="$style.item">
          {{ $t('ご高齢な方') }}
        </li>
        <li :class="$style.item">
          {{ $t('基礎疾患のある方（透析を受け') }}<br />
          {{ $t('ている方、免疫抑制剤や抗がん') }}<br />
          {{ $t('剤を用いている方を含む）') }}
        </li>
        <li :class="$style.item">
          {{ $t('妊娠中の方') }}
        </li>
      </ul>
    </div>
    <ul :class="[$style.rectContainer, $style.double]">
      <li :class="$style.symptom">
        {{ $t('発熱がある') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('咳が出る') }}
      </li>
    </ul>

    <p :class="$style.duration">
      いずれかの症状や風邪の様な症状があればすぐにご相談ください。
    </p>

    <a
      v-scroll-to="{
        el: '#consult',
        onDone: onDoneScroll
      }"
      href="#consult"
      :class="[$style.button, $style.clickable]"
    >
      <span :class="$style.text">{{ $t('新型コロナ感染症コールセンターへ') }}</span>
      <ArrowForwardIcon :class="$style.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { onDoneScroll } from '@/utils/vueScrollTo'
import AccessibleIcon from '@/static/flow/responsive/accessible.svg'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
import DirectionsWalkIcon from '@/static/flow/responsive/directions_walk.svg'
import PregnantWomanIcon from '@/static/flow/responsive/pregnant_woman.svg'

export default {
  components: {
    AccessibleIcon,
    ArrowForwardIcon,
    DirectionsWalkIcon,
    PregnantWomanIcon
  },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.heading {
  // elder
  &.multi {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: px2vw(-20);
    margin-left: px2vw(-10);
    margin-right: px2vw(-10);

    .icon {
      display: block;
      margin-bottom: 0;
      width: px2vw(50);
      height: px2vw(50);
    }

    > .list {
      display: flex;
      align-items: center;
      margin: px2vw(20) px2vw(10) 0;

      .item {
        align-items: left;
      }
    }
  }
}

@include largerThan($small) {
  $vw: 960;

  .heading {
    &.multi {
      margin-top: px2vw(-20, $vw);
      margin-left: px2vw(-10, $vw);
      margin-right: px2vw(-10, $vw);

      .icon {
        width: px2vw(50, $vw);
        height: px2vw(50, $vw);
      }

      > .list {
        margin: px2vw(20, $vw) px2vw(10, $vw) 0;
      }
    }
  }
}
</style>
