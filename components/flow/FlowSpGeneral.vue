<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]" aria-hidden="true">
        <HumanIcon />
      </span>
      <span :class="$style.fzMedium">{{ $t('一般の方') }}</span>
    </p>
    <ul :class="[$style.rectContainer, $style.double]">
      <li :class="$style.symptom">
        {{ $t('高熱') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('強いだるさ') }}<br />
        {{ $t('（倦怠感）') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('息苦しさ') }}<br />
        {{ $t('（呼吸困難）') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('発熱が続く') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('咳が続く') }}
      </li>
    </ul>
    <p :class="$style.duration">
      いずれかの症状やその他強い症状があればすぐにご相談ください。
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
import HumanIcon from '@/static/flow/responsive/accessibility.svg'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
export default {
  components: { HumanIcon, ArrowForwardIcon },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.duration {
  text-align: left;
}
</style>
