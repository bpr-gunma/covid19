<template>
  <div :class="$style.container">
    <p :class="$style.duration">
      「新型コロナウイルス感染者」との濃厚接触が疑われる方
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
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'

export default {
  components: { ArrowForwardIcon },
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
